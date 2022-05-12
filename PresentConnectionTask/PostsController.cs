using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using PresentConnectionTask;

namespace PresentConnectionTask
{
    [ApiController]
    [Route("api/posts")]
    public class PostsController : ControllerBase
    {
        private readonly IPostsRepository _postsRepository;
        private readonly IMapper _mapper;

        public PostsController(IPostsRepository postsRepository, IMapper mapper)
        {
            _postsRepository = postsRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IEnumerable<PostDto>> GetAllAsync()
        {
            return (await _postsRepository.GetAllAsync()).Select(o => _mapper.Map<PostDto>(o));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<PostDto>> GetAsync(int id)
        {
            var post = await _postsRepository.GetAsync(id);
            if (post == null) return NotFound($"Post with id {id} not found.");

            return Ok(_mapper.Map<PostDto>(post));
        }

        [HttpPost]
        public async Task<ActionResult<PostDto>> PostAsync(CreatePostDto postDto)
        {
            var post = _mapper.Map<Post>(postDto);

            await _postsRepository.InsertAsync(post);

            return Created($"/api/posts/{post.Id}", _mapper.Map<PostDto>(post));
        }

    }
}
